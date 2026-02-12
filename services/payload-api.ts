const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

// Types
export interface SpecialCertification {
  id: string
  name: string
  rank?: string
  course?: string
  regulation?: string
  seamanBook: string
  flag?: string
  expiryDate?: string
  createdAt: string
  updatedAt: string
}

export interface SeamanDoc {
  id: string
  name: string
  rank?: string
  course?: string
  regulation?: string
  seamanBook: string
  flag?: string
  expiryDate?: string
  createdAt: string
  updatedAt: string
}

export interface VesselCert {
  id: string
  name: string
  shipName: string
  imoNumber?: string
  callSign?: string
  portOfRegistry?: string
  grossTonnage?: string
  mmsiNo?: string
  certificateNumber: string
  dateOfIssue: string
  validTill: string
  remark?: string
  createdAt: string
  updatedAt: string
}

export interface COC {
  id: string
  name: string
  dateOfBirth: string
  nationality?: string
  rank: string
  course?: string
  certificateNumber?: string
  regulation?: string
  seamanBook?: string
  flag?: string
  issueDate: string
  expiryDate: string
  status?: string
  createdAt: string
  updatedAt: string
}

export interface IBC {
  id: string
  name: string
  rank?: string
  course?: string
  regulation?: string
  seamanBook: string
  flag?: string
  expiryDate?: string
  createdAt: string
  updatedAt: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  updatedAt: string
}

export interface SearchResult {
  id: string
  type: "special-certification" | "seaman-doc" | "vessel-cert" | "coc" | "ibc"
  title: string
  subtitle: string
  certificateNumber?: string
  expiryDate?: string
  status: string
  data: any
}

// Helper function to make API requests
async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json()
}

// Fetch all documents without pagination limits
export async function fetchSpecialCertifications(): Promise<SpecialCertification[]> {
  try {
    // Fetch with a very high limit to get all documents
    const response = await apiRequest("/special-certifications?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching special certifications:", error)
    return []
  }
}

export async function fetchSeamanDocs(): Promise<SeamanDoc[]> {
  try {
    const response = await apiRequest("/seaman-docs?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching seaman docs:", error)
    return []
  }
}

export async function fetchVesselCerts(): Promise<VesselCert[]> {
  try {
    const response = await apiRequest("/vessel-certificates?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching vessel certificates:", error)
    return []
  }
}

export async function fetchCOCs(): Promise<COC[]> {
  try {
    const response = await apiRequest("/cocs?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching COCs:", error)
    return []
  }
}

export async function fetchIBCs(): Promise<IBC[]> {
  try {
    const response = await apiRequest("/ibcs?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching IBCs:", error)
    return []
  }
}

export async function fetchContactMessages(): Promise<ContactMessage[]> {
  try {
    const response = await apiRequest("/contacts?limit=10000")
    return response.docs || response || []
  } catch (error) {
    console.error("Error fetching contact messages:", error)
    return []
  }
}

// Fetch individual documents by ID
export async function fetchSpecialCertificationById(id: string): Promise<SpecialCertification> {
  const response = await apiRequest(`/special-certifications/${id}`)
  return response
}

export async function fetchSeamanDocById(id: string): Promise<SeamanDoc> {
  const response = await apiRequest(`/seaman-docs/${id}`)
  return response
}

export async function fetchVesselCertById(id: string): Promise<VesselCert> {
  const response = await apiRequest(`/vessel-certificates/${id}`)
  return response
}

export async function fetchCOCById(id: string): Promise<COC> {
  const response = await apiRequest(`/cocs/${id}`)
  return response
}

export async function fetchIBCById(id: string): Promise<IBC> {
  const response = await apiRequest(`/ibcs/${id}`)
  return response
}

// Delete functions
export async function deleteSpecialCertification(id: string): Promise<void> {
  await apiRequest(`/special-certifications/${id}`, { method: "DELETE" })
}

export async function deleteSeamanDoc(id: string): Promise<void> {
  await apiRequest(`/seaman-docs/${id}`, { method: "DELETE" })
}

export async function deleteVesselCert(id: string): Promise<void> {
  await apiRequest(`/vessel-certificates/${id}`, { method: "DELETE" })
}

export async function deleteCOC(id: string): Promise<void> {
  await apiRequest(`/cocs/${id}`, { method: "DELETE" })
}

export async function deleteIBC(id: string): Promise<void> {
  await apiRequest(`/ibcs/${id}`, { method: "DELETE" })
}

// Search function
export async function searchDocuments(query: string): Promise<SearchResult[]> {
  try {
    // Fetch all documents and search locally for better performance
    const [specialCerts, seamanDocs, vesselCerts, cocs, ibcs] = await Promise.all([
      fetchSpecialCertifications(),
      fetchSeamanDocs(),
      fetchVesselCerts(),
      fetchCOCs(),
      fetchIBCs(),
    ])

    const results: SearchResult[] = []
    const searchTerm = query.toLowerCase()

    // Search special certifications
    specialCerts.forEach((item) => {
      if (
        item.name?.toLowerCase().includes(searchTerm) ||
        item.seamanBook?.toLowerCase().includes(searchTerm) ||
        item.rank?.toLowerCase().includes(searchTerm) ||
        item.course?.toLowerCase().includes(searchTerm) ||
        item.regulation?.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          type: "special-certification",
          title: item.name,
          subtitle: `${item.rank || "N/A"} - ${item.course || "Special Certification"}`,
          certificateNumber: item.seamanBook,
          expiryDate: item.expiryDate,
          status: item.expiryDate ? (new Date(item.expiryDate) > new Date() ? "Valid" : "Expired") : "N/A",
          data: item,
        })
      }
    })

    // Search seaman docs
    seamanDocs.forEach((item) => {
      if (
        item.name?.toLowerCase().includes(searchTerm) ||
        item.seamanBook?.toLowerCase().includes(searchTerm) ||
        item.rank?.toLowerCase().includes(searchTerm) ||
        item.course?.toLowerCase().includes(searchTerm) ||
        item.regulation?.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          type: "seaman-doc",
          title: item.name,
          subtitle: `${item.rank || "N/A"} - ${item.course || "Seaman Document"}`,
          certificateNumber: item.seamanBook,
          expiryDate: item.expiryDate,
          status: item.expiryDate ? (new Date(item.expiryDate) > new Date() ? "Valid" : "Expired") : "N/A",
          data: item,
        })
      }
    })

    // Search vessel certificates
    vesselCerts.forEach((item) => {
      if (
        item.name?.toLowerCase().includes(searchTerm) ||
        item.shipName?.toLowerCase().includes(searchTerm) ||
        item.certificateNumber?.toLowerCase().includes(searchTerm) ||
        item.imoNumber?.toLowerCase().includes(searchTerm) ||
        item.callSign?.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          type: "vessel-cert",
          title: item.name,
          subtitle: `${item.shipName} - ${item.certificateNumber}`,
          certificateNumber: item.certificateNumber,
          expiryDate: item.validTill,
          status: new Date(item.validTill) > new Date() ? "Valid" : "Expired",
          data: item,
        })
      }
    })

    // Search COCs
    cocs.forEach((item) => {
      if (
        item.name?.toLowerCase().includes(searchTerm) ||
        item.certificateNumber?.toLowerCase().includes(searchTerm) ||
        item.seamanBook?.toLowerCase().includes(searchTerm) ||
        item.rank?.toLowerCase().includes(searchTerm) ||
        item.course?.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          type: "coc",
          title: item.name,
          subtitle: `${item.rank} - ${item.certificateNumber || "COC"}`,
          certificateNumber: item.certificateNumber,
          expiryDate: item.expiryDate,
          status: item.status || (new Date(item.expiryDate) > new Date() ? "Valid" : "Expired"),
          data: item,
        })
      }
    })

    // Search IBCs
    ibcs.forEach((item) => {
      if (
        item.name?.toLowerCase().includes(searchTerm) ||
        item.seamanBook?.toLowerCase().includes(searchTerm) ||
        item.rank?.toLowerCase().includes(searchTerm) ||
        item.course?.toLowerCase().includes(searchTerm) ||
        item.regulation?.toLowerCase().includes(searchTerm)
      ) {
        results.push({
          id: item.id,
          type: "ibc",
          title: item.name,
          subtitle: `${item.rank || "N/A"} - ${item.course || "IBC Certificate"}`,
          certificateNumber: item.seamanBook,
          expiryDate: item.expiryDate,
          status: item.expiryDate ? (new Date(item.expiryDate) > new Date() ? "Valid" : "Expired") : "N/A",
          data: item,
        })
      }
    })

    return results
  } catch (error) {
    console.error("Error searching documents:", error)
    return []
  }
}

// Dashboard stats
export async function fetchDashboardStats() {
  try {
    // Fetch all documents to calculate stats
    const [specialCerts, seamanDocs, vesselCerts, cocs, ibcs, contacts] = await Promise.all([
      fetchSpecialCertifications(),
      fetchSeamanDocs(),
      fetchVesselCerts(),
      fetchCOCs(),
      fetchIBCs(),
      fetchContactMessages(),
    ])

    const totalDocuments = specialCerts.length + seamanDocs.length + vesselCerts.length + cocs.length + ibcs.length

    // Get recent documents (last 10)
    const allDocs = [
      ...vesselCerts.map((doc) => ({
        documentNo: doc.certificateNumber,
        shipName: doc.shipName,
        shipOwner: doc.name,
        securityEndDate: doc.validTill,
        type: "vessel-cert",
      })),
    ]
      .sort((a, b) => new Date(b.securityEndDate).getTime() - new Date(a.securityEndDate).getTime())
      .slice(0, 10)

    return {
      totalDocuments,
      specialCertifications: specialCerts.length,
      seamanDocs: seamanDocs.length,
      vesselCerts: vesselCerts.length,
      cocs: cocs.length,
      ibcs: ibcs.length,
      contactMessages: contacts.length,
      recentDocuments: allDocs,
    }
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return {
      totalDocuments: 0,
      specialCertifications: 0,
      seamanDocs: 0,
      vesselCerts: 0,
      cocs: 0,
      ibcs: 0,
      contactMessages: 0,
      recentDocuments: [],
    }
  }
}

// Authentication check
export async function checkAuthStatus(): Promise<boolean> {
  try {
    const response = await fetch("/api/auth/check", {
      method: "GET",
      credentials: "include",
    })
    return response.ok
  } catch (error) {
    console.error("Error checking auth status:", error)
    return false
  }
}

// Create functions for adding new documents
export async function createSpecialCertification(
  data: Omit<SpecialCertification, "id" | "createdAt" | "updatedAt">,
): Promise<SpecialCertification> {
  const response = await apiRequest("/special-certifications", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

export async function createSeamanDoc(data: Omit<SeamanDoc, "id" | "createdAt" | "updatedAt">): Promise<SeamanDoc> {
  const response = await apiRequest("/seaman-docs", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

export async function createVesselCert(data: Omit<VesselCert, "id" | "createdAt" | "updatedAt">): Promise<VesselCert> {
  const response = await apiRequest("/vessel-certificates", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

export async function createCOC(data: Omit<COC, "id" | "createdAt" | "updatedAt">): Promise<COC> {
  const response = await apiRequest("/cocs", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

export async function createIBC(data: Omit<IBC, "id" | "createdAt" | "updatedAt">): Promise<IBC> {
  const response = await apiRequest("/ibcs", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

// Update functions for editing documents
export async function updateSpecialCertification(
  id: string,
  data: Partial<SpecialCertification>,
): Promise<SpecialCertification> {
  const response = await apiRequest(`/special-certifications/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return response
}

export async function updateSeamanDoc(id: string, data: Partial<SeamanDoc>): Promise<SeamanDoc> {
  const response = await apiRequest(`/seaman-docs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return response
}

export async function updateVesselCert(id: string, data: Partial<VesselCert>): Promise<VesselCert> {
  const response = await apiRequest(`/vessel-certificates/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return response
}

export async function updateCOC(id: string, data: Partial<COC>): Promise<COC> {
  const response = await apiRequest(`/cocs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return response
}

export async function updateIBC(id: string, data: Partial<IBC>): Promise<IBC> {
  const response = await apiRequest(`/ibcs/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  })
  return response
}

// Contact message function
export async function createContactMessage(
  data: Omit<ContactMessage, "id" | "createdAt" | "updatedAt">,
): Promise<ContactMessage> {
  const response = await apiRequest("/contacts", {
    method: "POST",
    body: JSON.stringify(data),
  })
  return response
}

// Ship search function for public use
export async function searchShips(query: string): Promise<any[]> {
  try {
    const vesselCerts = await fetchVesselCerts()
    const searchTerm = query.toLowerCase()

    return vesselCerts
      .filter(
        (vessel) =>
          vessel.shipName?.toLowerCase().includes(searchTerm) ||
          vessel.imoNumber?.toLowerCase().includes(searchTerm) ||
          vessel.callSign?.toLowerCase().includes(searchTerm) ||
          vessel.certificateNumber?.toLowerCase().includes(searchTerm),
      )
      .map((vessel) => ({
        id: vessel.id,
        shipName: vessel.shipName,
        imoNumber: vessel.imoNumber,
        callSign: vessel.callSign,
        certificateNumber: vessel.certificateNumber,
        validTill: vessel.validTill,
        status: new Date(vessel.validTill) > new Date() ? "Valid" : "Expired",
      }))
  } catch (error) {
    console.error("Error searching ships:", error)
    return []
  }
}
