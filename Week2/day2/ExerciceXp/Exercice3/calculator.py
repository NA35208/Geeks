import operators

a = 10
b = 5

print("Using entire module import:")
print("Addition:", operators.addOperator(a, b))
print("Division:", operators.divideOperator(a, b))

from operators import addOperator, divideOperator
print("\nUsing specific function import:")
print("Addition:", addOperator(a, b))
print("Multiplication:", divideOperator(a, b))

import operators as op
print("\nUsing module import with alias:")
print("Addition:", op.addOperator(a, b))
print("Multiplication:", op.divideOperator(a, b))

