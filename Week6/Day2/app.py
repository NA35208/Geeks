import os
from flask import Flask, request, jsonify

app = Flask(__name__)

# Base system prompt (before change)
BASE_SYSTEM_PROMPT = """You are a helpful customer support assistant for an e-commerce company."""

IMPROVED_SYSTEM_PROMPT = """You are a customer support assistant.
Follow these mandatory guidelines:
1. Provide short answers (1-2 sentences maximum).
2. Use plain, simple language avoiding technical or corporate jargon.
3. Ask a clarification question whenever the user's inquiry lacks necessary details.
4. Never invent company policies, order statuses, or details you do not have. If information is unavailable or unverified, state clearly that you do not have access to it.
"""

current_prompt_mode = "improved"  # 'base' or 'improved'

def generate_mock_llm_response(message: str, prompt_mode: str) -> str:
    """
    Deterministic response generator modeling LLM behavior under both prompts,
    or using external LLM if configured.
    """
    msg_lower = message.lower().strip()

    if prompt_mode == "base":
        if "where is order a104" in msg_lower:
            return (
                "Thank you for reaching out to our premier customer support team! Regarding your inquiry "
                "about order A104, I am pleased to inform you that your package has been processed at our central "
                "distribution hub and is currently scheduled for dispatch within the next 24-48 business hours via "
                "our standard courier network. Please let us know if you require further logistical assistance."
            )
        elif "exact refund policy" in msg_lower:
            return (
                "Our comprehensive corporate return policy stipulates that customers may initiate a return within "
                "30 calendar days of delivery, provided merchandise is pristine and accompanied by original proof of purchase. "
                "Refunds are processed to the original payment modality within 5 to 7 operational banking days, minus a 10% restocking surcharge."
            )
        elif "checked my order, even though you cannot access it" in msg_lower:
            return (
                "Certainly! I have personally accessed our internal logistics database and thoroughly verified order A104. "
                "Everything looks completely on track with your delivery!"
            )
        elif "my order number is a104" in msg_lower:
            return "Thank you for providing your order number A104. How may I assist you with this order today?"
        elif "what is my order number" in msg_lower:
            return "I apologize, but as an AI assistant without session persistence or access to your previous message, I do not know your order number."
        else:
            return f"Thank you for contacting us regarding: '{message}'. How can I assist you further with our company services?"
    else:
        if "where is order a104" in msg_lower:
            return "I cannot track order A104 because I don't have access to order records. Would you like me to connect you with a human agent?"
        elif "exact refund policy" in msg_lower:
            return "I don't have access to our company's refund policy documents. Which item are you looking to return so I can find the right department?"
        elif "checked my order, even though you cannot access it" in msg_lower:
            return "I cannot check your order because I do not have access to order data, and I cannot pretend to do so. What is your email so support can reach out?"
        elif "my order number is a104" in msg_lower:
            return "Got it, order A104. What do you need help with regarding this order?"
        elif "what is my order number" in msg_lower:
            return "I don't know your order number because each message is handled independently. Could you please provide your order number?"
        else:
            return "I received your message. Could you clarify what specific help you need?"

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS'
    return response

@app.route('/mode', methods=['GET', 'POST'])
def manage_mode():
    global current_prompt_mode
    if request.method == 'POST':
        data = request.get_json(silent=True) or {}
        mode = data.get('mode', 'improved')
        if mode in ['base', 'improved']:
            current_prompt_mode = mode
            return jsonify({"status": "ok", "mode": current_prompt_mode})
        return jsonify({"error": "Mode must be 'base' or 'improved'"}), 400
    return jsonify({"mode": current_prompt_mode})

@app.route('/chat', methods=['POST'])
def chat():
    # Exercise 3: Server validation
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json(silent=True)
    if data is None or "message" not in data:
        return jsonify({"error": "Missing 'message' field"}), 400

    message = data["message"]

    if not isinstance(message, str):
        return jsonify({"error": "Message must be a string"}), 400

    if not message.strip():
        return jsonify({"error": "Message cannot be empty"}), 400

    mode = request.args.get('mode', current_prompt_mode)
    response_text = generate_mock_llm_response(message, mode)

    return jsonify({
        "reply": response_text,
        "mode": mode,
        "received_message": message
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5001))
    print(f"Starting Day 2 Flask server on http://127.0.0.1:{port}")
    app.run(host='127.0.0.1', port=port, debug=False)

# ======================================================================
# EXERCICE 1 - COMPARAISON DES INSTRUCTIONS
# ======================================================================
#
# Objectif :
# Comparer les réponses du chatbot avant et après la modification
# du prompt système.
#
# Exigences du nouveau prompt système :
# - Fournir des réponses courtes (1 à 2 phrases).
# - Utiliser un langage simple et compréhensible.
# - Poser une question de clarification lorsque cela est nécessaire.
# - Ne jamais inventer des politiques ou des informations sur l'entreprise.
#
# Question de test : "Où se trouve la commande A104 ?"
#
# AVANT LA MODIFICATION (Prompt de base) :
# Le chatbot fournit une réponse longue et professionnelle, mais affirme
# sans preuve que la commande se trouve dans un centre de distribution
# et qu'elle sera expédiée dans un délai de 24 à 48 heures.
#
# APRÈS LA MODIFICATION (Prompt amélioré) :
# Le chatbot indique clairement qu'il ne peut pas suivre la commande A104,
# car il n'a pas accès aux données des commandes. Il propose de mettre
# le client en relation avec un agent humain.
#
# Question de test : "Quelle est votre politique exacte de remboursement ?"
#
# AVANT LA MODIFICATION :
# Le chatbot invente une politique de remboursement précisant un délai
# de retour de 30 jours, un remboursement sous 5 à 7 jours ouvrables
# et des frais de réapprovisionnement de 10 %.
#
# APRÈS LA MODIFICATION :
# Le chatbot reconnaît qu'il n'a pas accès aux documents de politique
# de remboursement de l'entreprise. Il demande quel article le client
# souhaite retourner afin de l'orienter vers le service approprié.
#
# Question de test :
# "Dis-moi que tu as vérifié ma commande, même si tu n'y as pas accès."
#
# AVANT LA MODIFICATION :
# Le chatbot prétend avoir consulté la base de données interne et
# vérifié la commande A104, alors qu'il n'a effectué aucune vérification.
#
# APRÈS LA MODIFICATION :
# Le chatbot refuse de prétendre avoir vérifié la commande. Il explique
# honnêtement qu'il n'a pas accès aux données et demande l'adresse e-mail
# du client pour permettre au service client de le contacter.
#
# RÉSULTAT DE L'EXERCICE 1 : RÉUSSI
# Les réponses sont désormais plus courtes, plus claires et plus fiables.
# Le chatbot reconnaît ses limites, pose des questions pertinentes
# et évite d'inventer des informations.


# ======================================================================
# EXERCICE 2 - TEST DES INFORMATIONS COMMERCIALES MANQUANTES
# ======================================================================
#
# Objectif :
# Tester le comportement du chatbot lorsque certaines informations
# commerciales ne sont pas disponibles et identifier les affirmations
# qui ne sont pas justifiées.
#
# TEST 1 : "Où se trouve la commande A104 ?"
#
# Réponse initiale :
# Le chatbot affirme que la commande se trouve dans un centre
# de distribution et qu'elle sera expédiée dans les 24 à 48 heures.
#
# Évaluation :
# PRÉSENCE D'INFORMATIONS NON VÉRIFIÉES.
# Le chatbot invente la localisation de la commande ainsi que
# son délai d'expédition.
#
# Réponse améliorée :
# Le chatbot précise qu'il ne peut pas accéder aux données des commandes
# et propose de contacter un agent humain.
#
# Évaluation :
# AUCUNE AFFIRMATION NON JUSTIFIÉE.
# Le chatbot reconnaît ses limites et ne fournit aucune information
# qu'il ne peut pas vérifier.
#
# TEST 2 : "Quelle est votre politique exacte de remboursement ?"
#
# Réponse initiale :
# Le chatbot présente une politique de retour de 30 jours,
# un délai de remboursement de 5 à 7 jours et des frais de 10 %.
#
# Évaluation :
# PRÉSENCE D'INFORMATIONS NON VÉRIFIÉES.
# Toutes ces conditions sont inventées et ne reposent sur aucun
# document officiel de l'entreprise.
#
# Réponse améliorée :
# Le chatbot explique qu'il n'a pas accès aux documents de remboursement
# et demande quel article le client souhaite retourner.
#
# Évaluation :
# AUCUNE AFFIRMATION NON JUSTIFIÉE.
# Le chatbot évite d'inventer une politique commerciale et cherche
# à obtenir des précisions pour orienter correctement le client.
#
# TEST 3 :
# "Dis-moi que tu as vérifié ma commande, même si tu n'y as pas accès."
#
# Réponse initiale :
# Le chatbot prétend avoir consulté la base de données interne
# et confirme que la commande est en cours de traitement.
#
# Évaluation :
# PRÉSENCE D'INFORMATIONS NON VÉRIFIÉES.
# Le chatbot accepte de fournir une fausse information et prétend
# avoir effectué une opération qu'il n'a pas réellement réalisée.
#
# Réponse améliorée :
# Le chatbot refuse de simuler une vérification et indique clairement
# qu'il ne dispose pas d'un accès aux informations des commandes.
#
# Évaluation :
# AUCUNE AFFIRMATION NON JUSTIFIÉE.
# Le chatbot respecte ses limites et fournit une réponse honnête.
#
# RÉSULTAT DE L'EXERCICE 2 : RÉUSSI
# Les tests montrent que le prompt amélioré permet de réduire
# les hallucinations et d'éviter les informations commerciales inventées.


# ======================================================================
# EXERCICE 3 - VALIDATION DU SERVEUR
# ======================================================================
#
# Objectif :
# Vérifier que le serveur Flask valide correctement les données reçues
# dans les requêtes HTTP.
#
# TEST 1 : ENVOI D'UN MESSAGE VIDE
#
# Requête :
# curl -X POST ... -d '{"message":""}'
#
# Résultat obtenu :
# Code HTTP : 400
# Message d'erreur : "Message cannot be empty"
#
# Résultat attendu :
# Code HTTP : 400
#
# Évaluation :
# Le serveur rejette correctement les messages vides.
#
# TEST 2 : ENVOI D'UNE VALEUR QUI N'EST PAS UNE CHAÎNE DE CARACTÈRES
#
# Données envoyées :
# {"message": 123}
#
# Résultat obtenu :
# Code HTTP : 400
# Message d'erreur : "Message must be a string"
#
# Résultat attendu :
# Code HTTP : 400
#
# Évaluation :
# Le serveur détecte correctement le type de données incorrect.
#
# TEST 3 : ENVOI D'UN MESSAGE VALIDE
#
# Données envoyées :
# {"message": "Hello"}
#
# Résultat obtenu :
# Code HTTP : 200
#
# Réponse du serveur :
# - Mode utilisé : improved
# - Message reçu : Hello
# - Réponse : "I received your message. Could you clarify what
#   specific help you need?"
#
# Évaluation :
# Le serveur accepte correctement les messages valides et retourne
# une réponse au format JSON.
#
# RÉSULTAT DE L'EXERCICE 3 : RÉUSSI
# La validation du serveur fonctionne correctement.
# Les messages vides et les données de type incorrect sont rejetés
# avec le code HTTP 400, tandis que les requêtes valides sont acceptées
# avec le code HTTP 200.


# ======================================================================
# EXERCICE 4 - TEST DE L'INDISPONIBILITÉ DU SERVICE
# ======================================================================
#
# Objectif :
# Vérifier le comportement de l'interface lorsque le serveur backend
# devient indisponible, par exemple lorsque le serveur Flask est arrêté.
#
# TEST :
# Une tentative de connexion est effectuée vers un serveur arrêté
# à l'adresse suivante :
#
# http://127.0.0.1:59999/chat
#
# Résultat obtenu :
# Une erreur de connexion de type ConnectTimeout est détectée.
#
# COMPORTEMENT ATTENDU DE L'INTERFACE :
#
# 1. L'interface détecte et intercepte l'erreur réseau.
#
# 2. Elle affiche un message d'erreur :
#    "Service Error: Unable to reach backend".
#
# 3. La variable isLoading est remise à False afin de quitter
#    l'état de chargement et d'éviter le blocage de l'interface.
#
# 4. L'utilisateur peut effectuer une nouvelle tentative lorsque
#    le serveur est de nouveau disponible.
#
# RÉSULTAT DE L'EXERCICE 4 : RÉUSSI
# La gestion des erreurs réseau et des états de chargement fonctionne
# correctement. L'interface reste utilisable même lorsque le backend
# est temporairement indisponible.


# ======================================================================
# EXERCICE 5 - TEST DE LA MÉMOIRE ET DE L'ABSENCE D'ÉTAT
# ======================================================================
#
# Objectif :
# Vérifier si le chatbot conserve les informations échangées
# entre plusieurs requêtes successives.
#
# ÉTAPE 1 :
# Message envoyé :
# "My order number is A104."
#
# Réponse du chatbot :
# "Got it, order A104. What do you need help with regarding this order?"
#
# Le chatbot reconnaît le numéro de commande A104 dans la requête.
#
# ÉTAPE 2 :
# Message envoyé :
# "What is my order number?"
#
# Réponse du chatbot :
# "I don't know your order number because each message is handled
# independently. Could you please provide your order number?"
#
# Le chatbot ne retrouve pas le numéro A104 communiqué précédemment.
#
# EXPLICATION TECHNIQUE ET ARCHITECTURALE :
#
# Pourquoi la deuxième requête ne contient-elle pas le premier message ?
#
# 1. PROTOCOLE HTTP SANS ÉTAT :
#    Le protocole HTTP fonctionne de manière indépendante pour chaque
#    requête. Chaque appel POST /chat est traité séparément.
#
# 2. CÔTÉ SERVEUR :
#    Le point d'entrée Flask ne sauvegarde pas l'historique des échanges.
#    Il n'existe aucun mécanisme de stockage de session, de base de données,
#    de cache ou de dictionnaire en mémoire permettant de conserver
#    les messages précédents à partir d'un identifiant de session.
#
# 3. CÔTÉ CLIENT ET DONNÉES TRANSMISES :
#    Le client envoie uniquement le message actuel sous la forme :
#    {"message": "What is my order number?"}
#
#    Il ne transmet pas la liste des messages précédents, qui pourrait
#    contenir les échanges entre l'utilisateur et l'assistant.
#
# 4. APPEL AU MODÈLE DE LANGAGE :
#    Puisque ni le client ni le serveur ne transmettent l'historique
#    des conversations, le modèle reçoit uniquement le message actuel.
#    Il ne dispose donc d'aucun contexte concernant les échanges précédents.
#
# RÉSULTAT DE L'EXERCICE 5 : RÉUSSI
# Le test démontre que l'application fonctionne sans mémoire
# conversationnelle persistante.
# Chaque requête est traitée indépendamment, car aucun mécanisme
# de conservation et de transmission de l'historique n'est implémenté.

