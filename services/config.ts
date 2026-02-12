// Your PayloadCMS API URL - update this to match your backend
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://smmrm-backend.onrender.com"

// Remove the trailing slash if present
export const CLEAN_API_URL = API_URL.replace(/\/$/, "")

// Simple check without causing CORS issues
export const checkApiConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${CLEAN_API_URL}/api/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.ok
  } catch (error) {
    console.log("Backend connection failed:", error)
    return false
  }
}
