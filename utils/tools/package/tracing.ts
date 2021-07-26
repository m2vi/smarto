const dhl = async (trackingNumber: string) => {
  const headers = {
    Accept: 'application/json',
    'DHL-API-Key': 'ApiKeyHere',
  };

  const req = await fetch(`https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`, {method: 'GET', headers: headers});
  const json = await req.json();

  return json;
};

export default dhl;
