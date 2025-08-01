import tkinter as tk
from tkinter import messagebox


def salvar_dados():
    descricao = campo1.get()
    validade = campo2.get()
    segmento = campo3.get()
    lote = campo4.get()
    armazenamento = campo5.get()
    quantidade = campo6.get()   
    # Verificar se todos os campos foram preenchidos
    if not campo1 or not campo6:
        messagebox.showerror("Erro!", "Os campos 1º e 6º devem ser preenchidos.") 
    else:
        messagebox.showinfo("Cadastro realizado com sucesso!")
       

def atualizar_dados():        
    descricao = campo1.get()
    validade = campo2.get()
    segmento = campo3.get()
    lote = campo4.get()
    armazenamento = campo5.get()
    quantidade = campo6.get() 
    messagebox.showinfo("Cadastro Atualizado com sucesso!")


def exibir():
    descricao = campo1.get()
    validade = campo2.get()
    segmento = campo3.get()
    lote = campo4.get()
    armazenamento = campo5.get()
    quantidade = campo6.get()
    print("\n\n")
    print("Descrição:",descricao)
    print("Validade:",validade)
    print("Segmento:",segmento)
    print("Lote:",lote)
    print("Armazenamento:",armazenamento)
    print("Quantidade:",quantidade)
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

# Criando a janela principal
root = tk.Tk()
root.title("Cadastro Produto [Davy,Grazielli e Nicolie]")
root.geometry("465x430")
root.resizable(False, False)
#root.minsize(400,400)
#root.maxsize (700,700)
root ['bg'] = "blue"

# Definindo o layout dos campos
campo1 = tk.Label(root, text="Descrição", font ="bold", fg="black")
campo1.grid(row=0, column=2, padx=10, pady=5, sticky="e")
campo1 = tk.Entry(root)
campo1.grid(row=0, column=3, padx=10, pady=5)

campo2 = tk.Label(root, text="Validade", font ="bold", fg="black")
campo2.grid(row=1, column=2, padx=10, pady=5, sticky="e")
campo2 = tk.Entry(root)
campo2.grid(row=1, column=3, padx=10, pady=5)

campo3 = tk.Label(root, text="Segmento", font ="bold", fg="black")
campo3.grid(row=2, column=2, padx=10, pady=5, sticky="e")
campo3 = tk.Entry(root)
campo3.grid(row=2, column=3, padx=10, pady=5)

campo4 = tk.Label(root, text="Lote", font ="bold", fg="black")
campo4.grid(row=3, column=2, padx=10, pady=5, sticky="e")
campo4 = tk.Entry(root)
campo4.grid(row=3, column=3, padx=10, pady=5)

campo5 = tk.Label(root, text="Armazenamento", font ="bold", fg="black")
campo5.grid(row=4, column=2, padx=10, pady=5, sticky="e")
campo5 = tk.Entry(root)
campo5.grid(row=4, column=3, padx=10, pady=5)

campo6 = tk.Label(root, text="Quantidade", font ="bold", fg="black")
campo6.grid(row=5, column=2, padx=10, pady=5, sticky="e")
campo6 = tk.Entry(root)
campo6.grid(row=5, column=3, padx=10, pady=5)

# Botões de ação
botao_salvar = tk.Button(root, text="Salvar", font ="bold", command=salvar_dados)
botao_salvar.grid(row=7, column=1, padx=10, pady=30)

botao_atualizar = tk.Button(root, text="Atualizar", font ="bold", command=atualizar_dados)
botao_atualizar.grid(row=7, column=2, padx=10, pady=30)

botao_excluir = tk.Button(root, text="Excluir", font ="bold", command=excluir_dados)
botao_excluir.grid(row=7, column=3, padx=10, pady=30)

botao_pesquisar = tk.Button(root, text="Pesquisar", font ="bold", command=exibir)
botao_pesquisar.grid(row=7, column=4, padx=10, pady=30)

# Iniciar a interface
root.mainloop()
