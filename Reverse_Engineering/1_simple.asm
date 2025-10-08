
;   Assembly code divide into diffenet sections 

; Text section: All code come under this
; Data section: Variables come under this 
; Bss section: Any input get from user 

global _start     ; start reading from _start 

section .text

; Computer not know in assembly from where to start reading

_start:         ;start from here 


;check syscall number "cat /usr/include/x86_64-linux-gnu/asm/unistd_64.h | grep exit"
    mov rax,1      ;provide syscall number and 1 can be written in hex as 0x1
    

 ; check man 2 write (2 indicate syscall)
 ; fd (file decrypter)
 ; 0 (input), 1 (output), 2 (error)
 ; first argument goes in RDI ....


;Provide write arguments

    mov rdi,1       ;move (file descrypter) output(value:1) in rdi 1st argument)
    mov rsi,data    ;provide buffer (2nd argument)  
    mov rdx,11      ;length of word 11 or 0xb (3rd argument)
    syscall    ;syscall to print anything 

    ; exit to prevent from segmentation error
    mov rax,60  ; 60 number system call
    mov rdi,5  ; provide status code
    syscall  


section .data   ;saving variables
   data: db "Hello world" ;hello world is databytes



;  Steps to run the assembly file
; nasm -f elf64 file_name.asm  -o file_name.o        // save output in object file (extenshion don't matter)
; ld file_name.o -o file_name                 //link object file with other files to run
; ./file_name                     //segmentation error occur (mean program try to go place that don't exist)  we did not tell to exit

; echo $?      check returns status code