const Button = ({ icon, action }: { icon: string; action?: () => void }) => {
  return (
    <button onClick={action} className="action-button">
      <img src={icon} alt="Icon"></img>
    </button>
  );
};

export default Button;
