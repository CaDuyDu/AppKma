
import React from 'react';
import {StackNavigator, SwitchNavigator} from 'react-navigation';

import LoginScreen from "./src/components/screens/Login_1";
import LoginView from './src/components/screens/Login';
import Newfeeds from './src/components/screens/Newfeeds';
import Registers from './src/components/screens/Registers';
import Notifications from './src/components/screens/Notifications';
import Profiles from './src/components/screens/Profiles';
import ListGroups from './src/components/screens/Groups';
import PostNews from './src/components/screens/PostNews';
import Addcomments from './src/components/screens/Addcomments';
import HandlePage from './src/components/screens/Handle';
import LoginAdmin from './src/components/screens/LoginAdmin';
import ListTeachers from './src/components/screens/Handle/Teacher';
import AddTeachers from './src/components/screens/Handle/Teacher/addTeacher';
import ListSchools from './src/components/screens/Handle/School';
import ClassLists from './src/components/screens/Handle/School/classList';
import AddGroupSchools from './src/components/screens/Handle/School/addGroupSchools';
import AddClassLists from './src/components/screens/Handle/School/addClassList';
import ListMemberGroups from './src/components/screens/Handle/School/listMemberGroups';
import NotificationsHandle from './src/components/screens/Handle/Notifications';
import AddNotifications from './src/components/screens/Handle/Notifications/addNotifications';
import Thongbaomoi from './src/components/screens/Notifications';
import AddMembers from './src/components/screens/Handle/School/addMembers';
import ViewNotifi from './src/components/screens/Handle/Notifications/viewNotifi';
import CommentsNotifi from './src/components/screens/Notifications/notifiCations';
import ViewTeacher from './src/components/screens/Handle/Teacher/viewTeacher';
import PostGroups from './src/components/screens/Addgroups/postGroups';
import Groups from './src/components/screens/Addgroups';

export default SwitchNavigator(
    {
        LoginView: LoginView,
        Login: LoginScreen,
        Newfeeds: Newfeeds,
        Registers: Registers,
        Notifications: Notifications,
        Profiles: Profiles,
        ListGroups: ListGroups,
        Groups: Groups,
        PostNews: PostNews,
        Addcomments: Addcomments,
        HandlePage: HandlePage,
        LoginAdmin: LoginAdmin,
        ListTeachers: ListTeachers,
        AddTeachers: AddTeachers,
        ListSchools: ListSchools,
        ClassLists: ClassLists,
        AddGroupSchools: AddGroupSchools,
        AddClassLists: AddClassLists,
        ListMemberGroups: ListMemberGroups,
        NotificationsHandle: NotificationsHandle,
        AddNotifications: AddNotifications,
        Thongbaomoi: Thongbaomoi,
        AddMembers: AddMembers,
        ViewNotifi: ViewNotifi,
        CommentsNotifi:CommentsNotifi,
        ViewTeacher: ViewTeacher,
        PostGroups: PostGroups
    }
);
