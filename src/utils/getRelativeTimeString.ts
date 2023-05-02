import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getRelativeTimeString(date: Date | number) {
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}
