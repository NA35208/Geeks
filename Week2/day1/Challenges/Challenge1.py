
class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []

        if page_size <= 0:
            raise ValueError("page_size must be greater than 0")

        self.page_size = int(page_size)
        self.current_idx = 0
        self.total_pages = (
            len(self.items) + self.page_size - 1
        ) // self.page_size

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        page_num = int(page_num)

        if 1 <= page_num <= self.total_pages:
            self.current_idx = page_num - 1
        else:
            print(f"Invalid page number: {page_num}")

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def display_current_page(self):
        return "\n".join(str(item) for item in self.get_visible_items())


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
p.next_page()
print(p.get_visible_items())
p.last_page()
print(p.get_visible_items())
p.go_to_page(7)
print(p.current_idx + 1)
p.go_to_page(0)
print(p.display_current_page())

