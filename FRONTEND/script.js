import { LoginComponent } from "./src/Components/login.component.js";
import { CommentComponent } from "./src/Components/comment.component.js"
import { UserComponent } from "./src/Components/user.component.js";
import MainView from "./src/view/main.view.js";

MainView.build();
LoginComponent.run();
CommentComponent.run();
UserComponent.run();