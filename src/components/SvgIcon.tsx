/**
 * pnpm i vite-svg-sprite-wrapper -D && vite.config, then auto generate sprite.svg
 */
import sprite from '@/assets/sprite.svg';
/**
 * svg with \<use \/\> link to a sprite symbol
 */
function SvgIcon({
  iconName,
  title,
  ...props
}: React.SVGProps<SVGSVGElement> & { iconName: string; title?: string }) {
  return (
    <svg {...props} fill="currentColor">
      {title && <title>{title}</title>}
      <use xlinkHref={`${sprite}#${iconName}`} />
    </svg>
  );
}

export default SvgIcon;
