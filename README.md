# Node.js Target Calculation Assignment

![Node.js](https://img.shields.io/badge/Node.js-v16.0.0-green) ![License](https://img.shields.io/badge/license-MIT-blue)

## 📖 Description
This Node.js program calculates the **proportional distribution** of an annual target across months, while excluding specified non-working days such as Fridays or Sundays.

## 🚀 Features
- **Dynamic Exclusion**: Calculate working days while excluding specific days (e.g., Fridays, Sundays).
- **Proportional Distribution**: Distributes the total annual target proportionally based on valid working days.
- **Date Handling**: Effectively manages partial months and leap years.

## 🛠️ Usage
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MasterWithAhmad/target-calculation-nodejs.git

2. Navigate to the Project Directory:
```bash
cd target-calculation-nodejs
```

3. Install Dependencies (if any):
```bash
npm install
```

4. Run the Application:
```bash
node app.js
```

5. Modify Input Parameters in the calculateTotalTarget function call to test with different date ranges and targets.



🔍 Example

Here’s a simple example of how to use the function:
```bash
const startDate = '2024-01-01';
const endDate = '2024-03-31';
const totalAnnualTarget = 5220;

// Exclude both Fridays and Sundays
const result = calculateTotalTarget(startDate, endDate, totalAnnualTarget, [0, 5]); // 0 = Sunday, 5 = Friday
console.log(result);
```
📈 Sample Output

The output will include details about the working days, monthly targets, and the total target:
```bash
{
  "daysExcludingSpecified": [27, 25, 26],
  "daysWorkedExcludingSpecified": [27, 25, 26],
  "monthlyTargets": [435, 435, 435],
  "totalTarget": 1305
}
```
⚙️ Contributing

Contributions are welcome! If you have suggestions for improvements or enhancements, feel free to open an issue or submit a pull request.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

📫 Contact

For any inquiries, you can reach me at ahmad.netdev@gmail.com.
