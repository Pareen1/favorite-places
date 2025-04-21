const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${googleMapsApiKey}`;
  return imagePreviewUrl;
}

export default getMapPreview;

export async function getAddress(lat, lng) {
  const reverseGeocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleMapsApiKey}`;

  const response = await fetch(reverseGeocodingUrl);

  if (!response.ok) {
    throw new Error("Could not fetch address!");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Could not find address for location!");
  }

  const address = data.results[0].formatted_address;
  return address;
}
