function tryCatchParseJSON(json) {
  // Your implementation here
  try {
    const o = JSON.parse(json);
    if (o && typeof o === 'object') {
      return o;
    }
    throw e;
  } catch (e) {
    return null;
  }
}

tryCatchParseJSON(json) // test passed