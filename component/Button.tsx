import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  // refを受け取るには関数コンポーネントをforwardRefでラップする必要がある・・・https://zenn.dev/k_kazukiiiiii/articles/fa2aaab07235bb
  // そもそもrefとは・・・https://stackoverflow.com/questions/54620698/whats-the-difference-between-useref-and-createref
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full
        rounded-full
        bg-green-500
        border
        border-transparent
        p-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
      `,
          className,
        )}
        disabled={disabled}
        // なんでrefを渡しているのだろうか？
        // おそらく共通のコンポーネントとしては基本的にデフォルトの挙動はできるようにしておきたいからっぽい？
        // とりあえずおまじない的に渡すでよいかも。あとでref渡したくなった時に困るから。
        // 実際、今の実装ではref使っていない。
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
