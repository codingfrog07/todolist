const Header = ({ dayText, yearText, monthText }) => {
  return (
    <header>
      <div className="text_wrapper">
        <div className="day_text">{dayText}</div>
        <div className="year_month">
          <div className="year_text">{yearText}</div>
          <div className="month_text">{monthText}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
