export async function checkUserInStrapi(documentId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users?filters[document_id]=${documentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });
    const data = await response.json();
    return data.data.length > 0;
  } catch (error) {
    console.error('Error checking user in Strapi:', error);
    return false;
  }
}

export async function fetchAndroidLink(): Promise<string | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/android-links`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });
    return (await response.json()).data[0].download_link;
  } catch (error) {
    console.error('Error fetching Android link from Strapi:', error);
    return null;
  }
}


