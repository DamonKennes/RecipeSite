import csv

with open('/Users/Pieter/Downloads/archive/core-data_recipe.csv', mode='r') as csv_file:
    with open('result.csv', mode='w') as employee_file:
        employee_writer = csv.writer(employee_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                line_count += 1
            else:
                employee_writer.writerow([row[0], row[1], row[2], row[3], row[4], row[5]])
                line_count += 1
        print(f'Processed {line_count} lines.')
