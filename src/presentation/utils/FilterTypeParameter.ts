export function FilterTypeParameter(filter: string) {
  switch (filter) {
    case 'energia':
      return '74';
    case 'agronegócio':
      return '76';
    case 'real State':
      return '453';
    default:
      return '';
  }
}
