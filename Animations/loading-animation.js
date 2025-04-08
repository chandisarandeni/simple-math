export async function showLoadingAnimation() {
  try {
    // Simulate some async operation, like fetching data
    await new Promise((resolve) => setTimeout(resolve, 10)); // Replace with actual async task
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
