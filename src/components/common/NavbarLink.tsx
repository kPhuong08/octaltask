// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { LucideIcon } from 'lucide-react';

// interface NavbarLinkProps {
//   to: string;
//   icon: LucideIcon;
//   label?: string;
// }

// export function NavbarLink({ to, icon: Icon, label }: NavbarLinkProps) {
//   const location = useLocation();
//   const isActive = location.pathname === to;

//   return (
//     <Link to={to}>
//       <Button
//         variant="ghost"
//         size={label ? "sm" : "icon"}
//         className={`
//           ${isActive
//             ? 'bg-gray-100 text-blue-600 dark:bg-gray-700 dark:text-blue-400'
//             : 'text-gray-600 dark:text-gray-300'}
//           rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
//           ${label ? 'px-3' : ''}
//         `}
//       >
//         <Icon className="h-5 w-5" />
//         {label && <span className="ml-2">{label}</span>}
//       </Button>
//     </Link>
//   );
// }
