import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { forwardRef, useState } from 'react';

import Full from './Full';
import { IoLockClosed } from 'react-icons/io5';
import jwt from 'jsonwebtoken';

const Login = () => {
  return (
    <Full className="grid place-items-center">
      <Input placeholder="secret" className="max-w-xs mb-8" />
    </Full>
  );
};

export default Login;

export const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>(({ className, ...props }, ref) => {
  const [type, setType] = useState('password');
  const cn = `w-full py-2 rounded-0 text-primary-100 placeholder-primary-300 border-0 p-0 font-base bg-transparent`;

  const Icon = () => {
    if (type === 'password') {
      return <VscEyeClosed className="h-3 w-3 cursor-pointer text-accent" onClick={() => setType('text')} />;
    } else {
      return <VscEye className="h-3 w-3 cursor-pointer text-accent" onClick={() => setType('password')} />;
    }
  };

  return (
    <div
      className="flex mb-8 w-full items-center rounded-8 overflow-hidden"
      style={{
        maxWidth: '250px',
        height: '41px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
      }}
    >
      <div className="h-full grid place-items-center rounded-l-8" style={{ aspectRatio: '1 / 1' }}>
        <IoLockClosed className="h-3 w-3" />
      </div>
      <input type={type} ref={ref} className={cn} {...props} data-testid="input" />
      <div className="h-full grid place-items-center rounded-r-8" style={{ aspectRatio: '1 / 1' }}>
        <Icon />
      </div>
    </div>
  );
});

Input.displayName = 'Input';
