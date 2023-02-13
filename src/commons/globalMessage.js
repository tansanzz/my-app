import { openDialog } from "vue3-promise-dialog";
import MyMessageBox from "@/components/messageBox/MyMessageBox.vue";

export const showMessageBox = () => {
    return openDialog(MyMessageBox);
}