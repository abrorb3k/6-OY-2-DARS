import './index.css'
import Adress from "../Adress";
import Car from "../Car";

function User(props) {
  const { user } = props;
  return (
    <div className="user-card">
      <img src={user.image} alt="images" />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <h4>
        {user.phone} {user.email}
      </h4>
      <Adress region={user.address.region} zip={user.address.zip} />
      <ul>
        {user.cars.length > 0 &&
          user.cars.map(function (car, index) {
            return <Car car={car} key={index} />;
          })}
      </ul>
      {user.cars.length === 0 && <p>Mashina yo'q</p>}
    </div>
  );
}

export default User;
