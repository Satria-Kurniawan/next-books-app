const Button = ({ theme, icon, btnText }) => {
  return (
    <button
      className={`flex items-center gap-x-2 py-1 px-2 font-semibold ${theme}`}
    >
      {btnText}
      {icon}
    </button>
  )
}

export default Button
