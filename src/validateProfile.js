export function addValidation(profile) {
  return Object.keys(profile)
    .map(field => ({ [field]: { value: profile[field] } }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})
}

export function removeValidation(profile) {
  return Object.keys(profile)
    .map(field => ({ [field]: profile[field].value }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})
}

export function applyMask(field, value) {
  if (field.mask) {
    const mask = field.mask()
    return msk.fit(value, mask)
  }
  return value
}

export function applyValidation(field, value) {
  if (field.required && (!value || !value.trim())) return 'EMPTY_FIELD'
  if (field.validate && !field.validate(value)) return 'INVALID_FIELD'
  return null
}
