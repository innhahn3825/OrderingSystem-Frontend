import React, { useEffect, useState } from 'react';
import styles from './DashBoardTable.module.scss';
import MenuOnCategory from '../../../../models/MenuOnCategory.tsx';
import Rest from '../../../../rest/Rest.tsx';


const data = [
  {
    employeeId: '01',
    name: 'John Doe',
    email: 'johndoe@email.com',
    position: 'Frontend Developer',
  },
  {
    employeeId: '02',
    name: 'Sara',
    email: 'sara@email.com',
    position: 'HR Executive',
  },
  {
    employeeId: '03',
    name: 'Mike',
    email: 'mike@email.com',
    position: 'Backend Developer',
  },
]


const DashboardTable = () => {
        const rest = new Rest();

        const { employeeName } = useUser();
        const [employeeData, setEmployeeData] = React.useState(data)
        const [currentMenuCategory, setCurrentMenuCategory] = useState();
        const[menusBasedOnCategory, setMenusBasedOnCategory] = useState([]);
        const[menuOnCategory, setMenuOnCategory] = useState(new MenuOnCategory("", []));


        const getAllMenusBasedOnCategory = () => {
          rest.getMenuBasedOnCategory(
            `${INITIAL_URL}/orders/menu-on-category`,
            menuOnCategory.toJson(),
            handleMenusBasedOnCategoryLoad
          );
        };

        const handleMenusBasedOnCategoryLoad = (data) => {
          setMenusBasedOnCategory(data);
        }
        
        useEffect(() => {
          getAllMenusBasedOnCategory();
        }, [menuOnCategory]);

        useEffect(() => {
          setMenuOnCategory(
            new MenuOnCategory(
              activeMenuCategories[0],
              menuOnCategory.orderMenu
            )
          );
        }, [activeMenuCategories]);
        return (
          <div className={styles['container']}> 
            <h1 className={styles['Title']}> Out of Stock Items </h1>
            <table>
              <thead>
                <tr>
                  <th>Menu Title </th>
                  <th>Menu Price </th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map(({ employeeId, name, email}) => (
                  <tr key={employeeId}>
                    <td>
                      <input
                        name="name"
                        value={name}
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        name="email"
                        value={email}
                        type="email"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }

  
  
  export default DashboardTable
  
  