print("kg to lbs converter")

weight = float(input("Enter weight: "))

unit = input("kg or lbs? ")
if unit == "kg":
  convWeight = weight * 2.2
  print(convWeight) 
  print("lbs")
elif unit == "lbs":
  convWeight = weight / 2.2
  print(convWeight) 
  print("kg")
else:
  print("please enter valid units")