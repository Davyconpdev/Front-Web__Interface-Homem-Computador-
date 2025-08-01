import tkinter as tk
from tkinter import messagebox

def salvar_dados():
    carga = campo1.get()
    datahorasaida = campo2.get()
    datahoraretorno = campo3.get()
    destino = campo4.get()
    roteiro = campo5.get()
    kmsaida = campo6.get()
    kmretorno = campo7.get()
    # Verificar se todos os campos foram preenchidos
    if not campo1 or not campo2 or not campo3 or not campo4 or not campo5 or not campo6 or not campo7:
         messagebox.showerror("Erro!", "Todos os campos devem ser preenchidos.")
    else:
         messagebox.showinfo("Cadastro realizado com sucesso!")   


def atualizar_dados():
    carga = campo1.get()
    datahorasaida = campo2.get()
    datahoraretorno = campo3.get()
    destino = campo4.get()
    roteiro = campo5.get()
    kmsaida = campo6.get()
    kmretorno = campo7.get()   
    messagebox.showinfo("Cadastro Atualizado com sucesso!")


def exibir():
    carga = campo1.get()
    datahorasaida = campo2.get()
    datahoraretorno = campo3.get()
    destino = campo4.get()
    roteiro = campo5.get()
    kmsaida = campo6.get()
    kmretorno = campo7.get()
    print("\n\n")
    print("Carga:",carga+"kg")
    print("Data e hora Saida:",datahorasaida)
    print("Data e hora Retorno:",datahoraretorno)
    print("Destino:",destino)
    print("Roteiro:",roteiro)
    print("Saida:",kmsaida+"km")
    print("Retorno:",kmretorno+"km")
    limpar_campos()

       
def excluir_dados():
    messagebox.showinfo("Cadastro excluído com sucesso!")
    limpar_campos()
    

def limpar_campos():
    campo1.delete(0, tk.END)
    campo2.delete(0, tk.END)
    campo3.delete(0, tk.END)
    campo4.delete(0, tk.END)
    campo5.delete(0, tk.END)
    campo6.delete(0, tk.END)
    campo7.delete(0, tk.END)

# Criando a janela principal
root = tk.Tk()
root.title("Fluxo de Caminhões [Davy,Grazielli e Nicolie]")
root.geometry("495x430")
root.resizable(False, False)
#root.minsize(400,470)
#root.maxsize (700,700)
root ['bg'] = "blue"

# Definindo o layout dos campos
campo1 = tk.Label(root, text="Carga (KG)",font="bold",fg = "black")
campo1.grid(row=0, column=2, padx=10, pady=5, sticky="e")
campo1 = tk.Entry(root)
campo1.grid(row=0, column=3, padx=10, pady=5)

campo2 = tk.Label(root, text="Data e Hora Saida",font="bold",fg = "black")
campo2.grid(row=1, column=2, padx=10, pady=5, sticky="e")
campo2 = tk.Entry(root)
campo2.grid(row=1, column=3, padx=10, pady=5)

campo3 = tk.Label(root, text="Data e Hora Retorno",font="bold",fg = "black")
campo3.grid(row=2, column=2, padx=10, pady=5, sticky="e")
campo3 = tk.Entry(root)
campo3.grid(row=2, column=3, padx=10, pady=5)

campo4 = tk.Label(root, text="Destino",font="bold",fg = "black")
campo4.grid(row=3, column=2, padx=10, pady=5, sticky="e")
campo4 = tk.Entry(root)
campo4.grid(row=3, column=3, padx=10, pady=5)

campo5 = tk.Label(root, text="Roteiro",font="bold",fg = "black")
campo5.grid(row=4, column=2, padx=10, pady=5, sticky="e")
campo5 = tk.Entry(root)
campo5.grid(row=4, column=3, padx=10, pady=5)

campo6 = tk.Label(root, text="Saida(Km)",font="bold",fg = "black")
campo6.grid(row=5, column=2, padx=10, pady=5, sticky="e")
campo6 = tk.Entry(root)
campo6.grid(row=5, column=3, padx=10, pady=5)

campo7 = tk.Label(root, text="Retorno(Km)",font="bold",fg = "black")
campo7.grid(row=6, column=2, padx=10, pady=5, sticky="e")
campo7 = tk.Entry(root)
campo7.grid(row=6, column=3, padx=10, pady=5)

# Botões de ação
botao_salvar = tk.Button(root, text="Salvar",font="bold", command=salvar_dados)
botao_salvar.grid(row=8, column=1, padx=10, pady=30)

botao_atualizar = tk.Button(root, text="Atualizar",font="bold", command=atualizar_dados)
botao_atualizar.grid(row=8, column=2, padx=10, pady=30)

botao_excluir = tk.Button(root, text="Excluir",font="bold", command=excluir_dados)
botao_excluir.grid(row=8, column=3, padx=10, pady=30)

botao_pesquisar = tk.Button(root, text="Pesquisar",font="bold", command=exibir)
botao_pesquisar.grid(row=8, column=4, padx=10, pady=30)

# Iniciar a interface
root.mainloop()
