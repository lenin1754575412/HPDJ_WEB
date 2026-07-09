import logoImage from '../../../imports/logo_hostal.png';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoImage}
        alt="H PERU TOURS Logo"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
