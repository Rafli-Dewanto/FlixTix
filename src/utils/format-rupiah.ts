export default function formatRupiah(price: number): string {
  return `IDR ${price.toLocaleString('id-ID')},00`;
}
