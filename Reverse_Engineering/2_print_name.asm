global _start

section .text

_start:


; Write to data
   mov rax,1    ;syscall number
   mov rdi,1    ;write in output (1)
   mov rsi,data
   mov rdx,data_length    ;automatically calculate the length
   syscall


; syscall return value that he used to write and read syscall return user given value after executing syscall it save value in RAX register
;As program execute so RAX value will replace so we will save value in register that we will not use so value will no replace


; Getting Input data from User
   mov rax,0
   mov rdi,0 
   mov rsi,input
   mov rdx,100
   syscall
   mov rbx,rax        //save syscall return to rbx
   
   
;jmp exit_program      ;jump to saving_Data label
;jmp jump_middle       ;jump middle of data


; Saving User Input 
   mov rax,1
   mov rdi,1
   mov rsi,sav_input
   mov rdx,sav_input_length  
   syscall


; Printing Given Input data
   mov rax,1
   mov rdi,1

; jump_middle:
   mov rsi,input
   mov rdx,rbx            //move rax (syscall value) to rbx
   syscall

exit_program:
; Exit the program
   mov rax,60    ;syscall number
   mov rdi,5     ;return number
   syscall


section .data          ; data we know enter here not (Not user input)
   data: db "Enter you name : "         ;databytes
   data_length: equ $-data              ; $ represent (last word)

   sav_input: db 'Hello, '
   sav_input_length: equ $-sav_input


section .bss           ;Values that we not know such as get input from user
    input:resb 100         ;reserve byte (only get 100 bytes data) 



;  Steps to run the assembly file

; nasm -f elf64 file_name.asm  -o file_name.o     // save output in obj_file (ext don't matter)
; ld file_name.o -o file_name             //link obj_file with other files to run
; ./file_name                //segmentation error(program move place that not exist) use exit
; echo $?      check returns status code