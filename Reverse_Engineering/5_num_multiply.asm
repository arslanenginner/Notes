
%include "util.asm"
global _start

section .text

_start:
	
	mov rdi,msg     ; get null terminated string
	call printstr   ; print the number
	call readint    ; return int value in rax and read user provide integer 
    mov [usr_val],rax   ;store rax val where user point space 
    mov rbx,1

loop_running:

    mov rcx,[usr_val]        ; mov value to reg for mul
    

    imul rcx,rbx
    mov rdi,rcx
    call printint
    call endl		; print newline
    add rbx,1 		; add one in rcx everytime
    cmp rbx,11
    jne loop_running
      
    call exit0      ; rdi value 0 (XOR) and call exit

section .data

	msg: db "Enter a number, ",0              

	;0 mean null teerminated (assembler not know where it end only know by length or provide null)


section .bss

	usr_val: resb 8    ; rax reg hold max 8 byte
	
	
	
	
; use to get library
; wget https://raw.githubusercontent.com/mjbrusso/util.asm/refs/heads/master/util.asm

	
	
	
	
	
	
	