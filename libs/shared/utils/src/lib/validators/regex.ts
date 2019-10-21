const URL_REGEXP = /^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|web|app|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/
const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const SUBDOMAIN_REGEXP = /^[a-zA-Z\d-]+$/i
const DOMAIN_AND_SUBDOMAIN = /([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g

export const regex = {
  URL_REGEXP,
  NUMBER_REGEXP,
  EMAIL_REGEXP,
  SUBDOMAIN_REGEXP,
  DOMAIN_AND_SUBDOMAIN
}