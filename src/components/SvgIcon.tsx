/**
 * pnpm i vite-svg-sprite-wrapper -D && vite.config, then auto generate sprite.svg
 */
//import sprite from '@/assets/sprite.svg';
/**
 * 生成的sprite.svg 放在public目录下，build后会自动放在dist目录下，保持原样。
 * 如果是src目录下就会被vite改变，需要使用上面的import
 */
function SvgIcon({
  iconName,
  title,
  ...props
}: React.SVGProps<SVGSVGElement> & { iconName: string; title?: string }) {
  return (
    <svg {...props} fill="currentColor">
      {title && <title>{title}</title>}
      <use xlinkHref={`/assets/sprite.svg#${iconName}`} />
    </svg>
  );
}

export default SvgIcon;
