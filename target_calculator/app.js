/**
 * ======================================================
 * Title: Target Calculation Excluding Specific Days
 * Author: Ahmed Ibrahim Ahmed
 * Date: 11th October 2024
 * 
 * Description:
 * This program calculates the proportional distribution of an 
 * annual target across months, while excluding specific non-working 
 * days, such as Fridays or any other specified days of the week. 
 * It calculates the total number of valid working days, distributes 
 * the total annual target proportionally based on these days, and 
 * handles dynamic exclusion of non-working days.
 * 
 * Features:
 * - Calculates working days excluding Fridays or any other days.
 * - Proportionally distributes the total target across months.
 * - Handles partial months, leap years, and flexible non-working days.
 * 
 * Example:
 * calculateTotalTarget('2024-01-01', '2024-03-31', 5220, [5]);
 * - Excludes Fridays (5 represents Friday in JavaScript).
 * - Returns the monthly targets and total target distribution.
 * ======================================================
 */

/**
 * Function to calculate proportional distribution of the annual target across months,
 * excluding specific days (e.g., Fridays, Sundays, or any other specified day).
 * 
 * @param {string} startDate - The start date of the period in YYYY-MM-DD format.
 * @param {string} endDate - The end date of the period in YYYY-MM-DD format.
 * @param {number} totalAnnualTarget - The total target amount to distribute.
 * @param {Array} daysToExclude - Days to exclude from the working days (e.g., [0, 5] to exclude Sundays and Fridays).
 * @returns {Object} An object containing details about working days, targets, and total target.
 */
function calculateTotalTarget(startDate, endDate, totalAnnualTarget, daysToExclude = [5]) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let daysExcludingSpecified = [];
    let daysWorkedExcludingSpecified = [];
    let monthlyTargets = [];
    let totalTarget = 0;

    // Loop through each month between startDate and endDate
    let current = new Date(start.getFullYear(), start.getMonth(), 1);
    while (current <= end) {
        // Get the first and last day of the current month within the range
        const firstDayOfMonth = new Date(current.getFullYear(), current.getMonth(), 1);
        const lastDayOfMonth = new Date(current.getFullYear(), current.getMonth() + 1, 0);

        // Adjust start and end dates if they are in the middle of the month
        const effectiveStartDate = (current.getFullYear() === start.getFullYear() && current.getMonth() === start.getMonth())
            ? start
            : firstDayOfMonth;
        const effectiveEndDate = (current.getFullYear() === end.getFullYear() && current.getMonth() === end.getMonth())
            ? end
            : lastDayOfMonth;

        // Count the total number of working days excluding specified days (like Fridays, Sundays)
        let totalDaysInMonth = 0;
        let workedDaysInMonth = 0;
        for (let date = new Date(effectiveStartDate); date <= effectiveEndDate; date.setDate(date.getDate() + 1)) {
            if (!daysToExclude.includes(date.getDay())) { // If the day is not in the days to exclude
                totalDaysInMonth++;
                workedDaysInMonth++;
            }
        }

        // Store results for this month
        daysExcludingSpecified.push(totalDaysInMonth);
        daysWorkedExcludingSpecified.push(workedDaysInMonth);

        // Calculate monthly target based on worked days
        const monthlyTarget = (workedDaysInMonth / totalDaysInMonth) * (totalAnnualTarget / 12);
        monthlyTargets.push(monthlyTarget);
        totalTarget += monthlyTarget;

        // Move to the next month
        current.setMonth(current.getMonth() + 1);
    }

    return {
        daysExcludingSpecified,
        daysWorkedExcludingSpecified,
        monthlyTargets,
        totalTarget
    };
}

// Example usage of the function
const startDate = '2024-01-01';
const endDate = '2024-05-31';
const totalAnnualTarget = 5220;

// Call the function excluding both Fridays (5) and Sundays (0)
const result = calculateTotalTarget(startDate, endDate, totalAnnualTarget, [0, 5]); // 0 = Sunday, 5 = Friday

// Display the results in a structured way
console.log("Days excluding specified days:");
console.table(result.daysExcludingSpecified);

console.log("Days worked excluding specified days:");
console.table(result.daysWorkedExcludingSpecified);

console.log("Monthly targets:");
console.table(result.monthlyTargets);

console.log("Total target:");
console.log(result.totalTarget);


// Display the results
/**
 * console.log("Days excluding specified days: ", result.daysExcludingSpecified);
console.log("Days worked excluding specified days: ", result.daysWorkedExcludingSpecified);
console.log("Monthly targets: ", result.monthlyTargets);
console.log("Total target: ", result.totalTarget); 
 */