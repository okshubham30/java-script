let companies = [
    "Bloomberg",
    "Microsoft",
    "Uber",
    "Google",
    "IBM",
    "Netflix"
];

// Remove first company
companies.shift();

// Replace Uber with Ola
companies.splice(1, 1, "Ola");

// Add Amazon at the end
companies.push("Amazon");
console.log(companies);