
global code   ; code start from start code


section .text

code: 

   mov rax,2
   add rax,2


   mov rax,4
   sub rax,3


   mov rax,6
   imul rax,rax,7        ;(mul instruction name) and result store in 3rd reg

   
   mov rdx,0
   mov rax,100 
   mov rbx,2     ;use any one except rax,rdx
   idiv rbx         ; divide work like this (rdx:rax/rbx) 


_exit: 
   
   mov rax,60
   mov rdx,0
   syscall




;  Steps to run the assembly file

; nasm -f elf64 file_name.asm  -o file_name.o     // save output in obj_file (ext don't matter)
; ld -e code file_name.o -o file_name             //link obj_file with other files to run and provide label where to start reading if not use _start
; ./file_name                //segmentation error(program move place that not exist) use exit
; echo $?      check returns status code   