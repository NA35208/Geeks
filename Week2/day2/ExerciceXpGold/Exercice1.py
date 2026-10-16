class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            self.authenticated = False

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Please authenticate before making a deposit.")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Deposit amount must be a positive integer.")
        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Please authenticate before withdrawing.")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer.")
        self.balance -= amount

class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Please authenticate before withdrawing.")
        if not isinstance(amount, int) or amount <= 0:
            raise Exception("Withdrawal amount must be a positive integer.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Withdrawal would put balance below minimum balance.")
        self.balance -= amount

class ATM:
    def __init__(self, account_list, try_limit):
        if not isinstance(account_list, list) or not all(isinstance(acc, BankAccount) for acc in account_list):
            raise Exception("account_list must be a list of BankAccount or MinimumBalanceAccount instances.")

        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit. Setting try_limit to 2.")
            self.try_limit = 2
        else:
            self.try_limit = try_limit

        self.account_list = account_list
        self.current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\nWelcome to the ATM.")
            print("1. Log In")
            print("2. Exit")

            choice = input("Please select an option: ")

            if choice == '1':
                username = input("Enter username: ")
                password = input("Enter password: ")
                self.log_in(username, password)
            elif choice == '2':
                print("Exiting. Goodbye!")
                break
            else:
                print("Invalid option. Try again.")

    def log_in(self, username, password):
        for account in self.account_list:
            account.authenticate(username, password)
            if account.authenticated:
                print("Login successful.")
                self.show_account_menu(account)
                self.current_tries = 0  
                return
        self.current_tries += 1
        print(f"Login failed. {self.try_limit - self.current_tries} tries left.")
        if self.current_tries >= self.try_limit:
            print("Reached maximum login attempts. Shutting down the ATM.")
            exit()

    def show_account_menu(self, account):
        while True:
            print("\nAccount Menu")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. View Balance")
            print("4. Exit to main menu")

            choice = input("Please select an option: ")

            if choice == '1':
                try:
                    amount = int(input("Enter amount to deposit: "))
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == '2':
                try:
                    amount = int(input("Enter amount to withdraw: "))
                    account.withdraw(amount)
                    print(f"Withdrew {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(f"Error: {e}")
            elif choice == '3':
                print(f"Current balance: {account.balance}")
            elif choice == '4':
                print("Logging out and returning to main menu.")
                account.authenticated = False 
                break
            else:
                print("Invalid option. Try again.")