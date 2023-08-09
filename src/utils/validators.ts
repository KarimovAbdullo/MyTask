export function validator(...validators: ((value: string) => string | void)[]) {
  return (value: string) => {
    for (const fn of validators) {
      const message = fn(value)
      if (message) {
        return message
      }
    }
  }
}

export function authRequired(value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.length < 12
  ) {
    return 'Login noto‘g‘ri kiritildi'
  }
}

export function required(value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.length === 0
  ) {
    return 'Parol noto‘g‘ri kiritildi'
  }
}

export function email(value: string) {
  const regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const cyrillic = /\p{sc=Cyrillic}/gu
  if (!regx.test(value) || cyrillic.test(value)) {
    return 'This field should be email'
  }
}

export function minLength(size: number) {
  return (value: string) => {
    if (value.length < size) {
      return 'must be at least {size} characters'.replace(
        '{size}',
        String(size),
      )
    }
  }
}

export function onlyLetter(value: string) {
  const regx = /^[A-Za-z]+$/
  if (!regx.test(value)) {
    return 'This field only accepts letters'
  }
}

export function onlyNumber(value: string) {
  if (!/^-?\d*(\.\d+)?$/.test(value)) {
    return 'This field only accepts numbers'
  }
}

export function onlyTrue(value: boolean) {
  if (!value) {
    return 'This field must be accepted'
  }
}

export function onlyLink(value: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (!urlRegex.test(value)) {
    return 'Selected fields only accepts links'
  }
}
