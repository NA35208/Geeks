
if __name__ == "__main__":
    from text_analyzer import TextAnalyzer

    print("=== Valid Examples ===")
    text = "Python is fun and Python is powerful"
    analyzer = TextAnalyzer(text)

    print(analyzer)  
    print(len(analyzer))  
    print(analyzer.word_count())  
    print(analyzer.count_word("Python")) 

    print("=== Edge Case: Single Word ===")
    single = TextAnalyzer("Hello")
    print(single)
    print(len(single))
    print(single.word_count())
    print(single.count_word("Hello"))

    print("=== Exception Cases ===")
    try:
        bad = TextAnalyzer("")
    except Exception as e:
        print(f"Exception: {e}")

    try:
        print(analyzer.count_word(""))
    except Exception as e:
        print(f"Exception: {e}")