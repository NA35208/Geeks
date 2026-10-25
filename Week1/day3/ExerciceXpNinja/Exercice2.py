def get_full_name(first_name, last_name, middle_name=None):
	name_parts = [first_name]
	if middle_name:
		name_parts.append(middle_name)
	name_parts.append(last_name)
	return " ".join(part.capitalize() for part in name_parts)