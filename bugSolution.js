function myFunc(a, b) {
  if (a === null && b === null) {
    return null; // Handle both null values
  } else if (a === null || b === null) {
    return 0; // Handle one null value
  }
  return a + b; 
}