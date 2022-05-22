import tkinter
from tkinter import ttk

# ウィンドウ（フレーム）の作成
root = tkinter.Tk()
root.title("KTaNE Bot")
root.geometry("400x400")

style = ttk.Style()
style.configure("BW.TLabel", foreground="black", background="white")

main_frm = ttk.Frame(root)
button_frame = tkinter.Frame(root)
edge_frame = tkinter.Frame(root)
warn_frame = tkinter.LabelFrame(root, text='Warnings')
bomb_frame = tkinter.LabelFrame(root, text='Bomb')
curframe = main_frm
init = True
class Bomb():
    serials = tkinter.StringVar()
    batteries = tkinter.StringVar()
    b_holders = tkinter.StringVar()
    indicator = [""]

bom = Bomb()

def main_setup():
    childs = []
    for widget in warn_frame.children.values():
        childs.append(widget)
        pass

    for widget in childs:
        widget.destroy()
        pass
    
    if (not init and len(bom.serials.get()) != 7):
        make_label(warn_frame, "Serials are 7 charactars")
    
    if (not init and len(bom.batteries.get()) >= 1 and len(bom.b_holders.get()) >= 1):
        make_label(warn_frame, "Batteries are not present?")
    
    global curframe
    if (curframe != main_frm):
        curframe.grid_remove()
    
    curframe = main_frm

    main_frm.grid(column=0, row=0, pady=5)

def Edges():
    global curframe
    main_frm.grid_remove()
    curframe = edge_frame

    edge_frame.grid(column=0, row=0, pady=5)

def Edges_Quit():
    print("Serials: " + bom.serials.get())
    print("Batteries: " + bom.batteries.get() + " in " + bom.b_holders.get())
    main_setup()

def button():
    global curframe
    main_frm.grid_remove()
    curframe = button_frame
    button_frame.grid(column=0, row=0)

def make_label(frame, tex):
    label = tkinter.Label(frame, text=tex)
    label.grid()

def make_button(frame, tex, com):
    label = tkinter.Button(frame, text=tex, command=com)
    label.grid()
#Main
make_label(main_frm, "Click the Module Name")

#Button Module
make_button(main_frm, "EdgeWork", Edges)
make_button(main_frm, "Button", button)

#Edgeworks
indi_queue = tkinter.StringVar()

def lit_indi():

    if (len(indi_queue.get()) != 3):

        make_label(warn_frame, "Indicators are 3 letters")
        return
    indi_queue.set(indi_queue.get().upper())
    bom.indicator.append("L" + indi_queue.get())
    print("Lit " + indi_queue.get() + " is added")
    tkinter.Label(bomb_frame, text="Lit " + indi_queue.get()).grid()
    indi_queue.set("")
    return

def unlit_indi():

    if (len(indi_queue.get()) != 3):
        make_label(warn_frame, "Indicators are 3 letters")
        return
    
    indi_queue.set(indi_queue.get().upper())
    bom.indicator.append("U" + indi_queue.get())
    print("Unlit " + indi_queue.get() + " is added")
    tkinter.Label(bomb_frame, text="Unlit " + indi_queue.get()).grid()
    indi_queue.set("")
    return

make_label(edge_frame, "Input the bomb's information")

sel_frame = ttk.Frame(edge_frame)
sel_frame.grid(row=1)
sel_label = tkinter.Label(sel_frame, text="Serials: ")
sel_label.grid(column=0, row=0)
edge_box = tkinter.Entry(sel_frame, width=8, textvariable=bom.serials)
edge_box.grid(column=1, row=0)
indi_frame = ttk.Frame(edge_frame)
indi_frame.grid(row=2)
indi_label = tkinter.Label(indi_frame, text="Indicator: ")
indi_label.grid(column=0, row=0)
indi_box = tkinter.Entry(indi_frame, width=4, textvariable=indi_queue)
indi_box.grid(column=1, row=0)
indi_lit = tkinter.Button(indi_frame, text="○", command=lit_indi)
indi_lit.grid(column=2, row=0)
indi_unlit = tkinter.Button(indi_frame, text="●", command=unlit_indi)
indi_unlit.grid(column=3, row=0)
batt_frame = ttk.Frame(edge_frame)
batt_frame.grid(row=3)
batt_label = tkinter.Label(batt_frame, text="Batteries: ")
batt_label.grid(column=0, row=0)
batt_box = tkinter.Entry(batt_frame, width=2, textvariable=bom.batteries)
batt_box.grid(column=1, row=0)
batt_label2 = tkinter.Label(batt_frame, text="in")
batt_label2.grid(column=2, row=0)
batt_box2 = tkinter.Entry(batt_frame, width=2, textvariable=bom.b_holders)
batt_box2.grid(column=3, row=0)


#Return to Main Frame Buttons
make_button(button_frame, "戻る", main_setup)
make_button(edge_frame, "戻る", Edges_Quit)

main_setup()

warn_frame.grid(column=0, columnspan=8, row=8, pady=5, sticky=tkinter.W+tkinter.E)
bomb_frame.grid(column=1, row=0)

init = False
# イベントループ（TK上のイベントを捕捉し、適切な処理を呼び出すイベントディスパッチャ）
root.mainloop()