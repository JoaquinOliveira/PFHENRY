import { Admin, Resource, CustomRoutes, EditGuesser, ShowGuesser, ListGuesser } from "react-admin";
import { MyLayout } from "../../components/Admin/Layout/Layout";
import { Dashboard } from "../../components/Admin/Dashboard/Dashboard";
import { BookList } from "../../components/Admin/BooksRoutes/Booklist";
import { Userlist } from "../../components/Admin/Userlist/Userlist";
import dataProvider from "../../components/Admin/DataProvider/dataProvider";
import CardDetail from "../../components/CardDetail/CardDetail";
import { Route } from "react-router-dom";
import BookForm from "../../components/BookForm/BookForm";
import { BookCreate } from "../../components/Admin/BookCreate/BookCreate";
import OrderList from "../../components/Admin/OrdersRoutes/OrderList.jsx";

export const AdminDashboard = () => {
  return (
    <Admin dataProvider={dataProvider} layout={MyLayout} dashboard={Dashboard} basename="/admin">
      <CustomRoutes>
        <Route path="/admin" />
      </CustomRoutes>
      <Resource
        name="books"
        list={BookList}
        edit={EditGuesser}
        basePath="/admin/books"
        show={ShowGuesser}
        create={BookCreate}
        options={{ label: "Books" }}
      >
        <Route path="/:id" element={<EditGuesser/>}/>
        <Route path="/:id/show" element={ <CardDetail/> }/>
      </Resource>
      <Resource
        name="users"
        list={Userlist}
        basePath="/admin/users"
        options={{ label: "Users" }}
      />
      <Resource
        name="orders"
        list={OrderList}
        show={ShowGuesser}
        basePath="/admin/orders"
        options={{ label: "Orders" }}
      />
    </Admin>
  );
};

export default AdminDashboard;