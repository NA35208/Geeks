import random

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        statement = f"{self.phone_number} a appelé {other_phone.phone_number}"
        print(statement)
        self.call_history.append(statement)
        other_phone.call_history.append(statement)

    def show_call_history(self):
        print(f"\nHistorique pour {self.phone_number}:")
        for record in self.call_history:
            print(record)

    def send_message(self, other_phone, content):
        msg = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(msg)
        other_phone.messages.append(msg)

    def show_outgoing_messages(self):
        print(f"\nMessages envoyés par {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(f"À {msg['to']}: {msg['content']}")

    def show_incoming_messages(self):
        print(f"\nMessages reçus par {self.phone_number}:")
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(f"De {msg['from']}: {msg['content']}")

    def show_messages_from(self, other_phone):
        print(f"\nMessages de {other_phone.phone_number} reçus par {self.phone_number}:")
        for msg in self.messages:
            if msg["from"] == other_phone.phone_number and msg["to"] == self.phone_number:
                print(msg["content"])


if __name__ == "__main__":
    p1 = Phone("0611223344")
    p2 = Phone("0655667788")

    p1.call(p2)
    p1.show_call_history()
    p2.show_call_history()

    p1.send_message(p2, "Salam, labas alik?")
    p2.send_message(p1, "Alhamdulillah, wenta?")
    p1.send_message(p2, "Koulshi bikhayr, shokran.")

    p1.show_outgoing_messages()
    p1.show_incoming_messages()
    p1.show_messages_from(p2)
