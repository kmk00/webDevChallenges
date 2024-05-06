const Button = ({ icon }: { icon: string }) => {
  return (
    <button className="action-button">
      <img src={icon} alt="Icon"></img>
    </button>
  );
};

export default Button;
