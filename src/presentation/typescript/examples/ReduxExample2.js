import { RootState, AppDispatch } from "app/store";

function TodosList() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();
}
