import {SystemState} from "@/src/types/SystemState"
import { create } from "zustand"

export const useSystemStore = create<SystemState>((set, get) => (
    {
        isOpenSlideBar: true,
        isOpenInforOption: false,
        isOpenSuggest: false,
        isOpenFileContainer: false,

        setIsOpenFileContainer() {
            const {isOpenFileContainer} = get()
            set({isOpenFileContainer: !isOpenFileContainer})
        },

        setIsOpenSuggest() {
            const {isOpenSuggest} = get()
            set({isOpenSuggest: !isOpenSuggest})
        },

        setIsOpenSlideBar() {
            const {isOpenSlideBar} = get()
            set({isOpenSlideBar: !isOpenSlideBar})
        },
        setIsOpenInforOption() {
            const {isOpenInforOption} = get()
            set({isOpenInforOption: !isOpenInforOption})
        }
    }
))
