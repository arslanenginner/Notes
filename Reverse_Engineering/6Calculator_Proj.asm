
%include "util.asm"


global _start

section .text

_start:

	mov rdi,fir_num
	call printstr
	call readint
	mov [fir_inp],rax    

    mov rdi,sec_num
	call printstr
	call readint
	mov [sec_inp],rax 
    
    mov rdi,operator
	call printstr
	
	mov rdi,op_inp
	mov rsi,2            ;length
	call readstr         ;readstr function get adress of string not value 
	
 	;mov rdi,error
   
 
 Compare_Operators:
    mov rdi,[op_inp]
    cmp rdi,43  ;+
    je Adding_values
    cmp rdi,45  ;-
    je Subtracting_values
    cmp rdi,42  ;*
    je Multiplying_values 
    cmp rdi,47  ;/
    je Dividing_values

Adding_values:
   mov rdi,[fir_inp]
   add rdi,[sec_inp]
   call result

Subtracting_values:
   mov rdi,[fir_inp]
   sub rdi,[sec_inp]       ; calculation will store in rdi so we use directly rdi 
   call result 

Multiplying_values:
   mov rdi,[fir_inp]
   imul rdi,[sec_inp]
   call result 

Dividing_values:
   mov rdx,0             ; qutotion store in rax and reminder store in rdx
   mov rax,[fir_inp]     ; divide value which is in rdx
   mov rbx,[sec_inp]
   idiv rbx             ; Signed division: RDX:RAX / RBX → Quotient in RAX
   mov rdi, rax         ; Move result to RDI for printint
   call result

exception:
	mov rdi,error
	call printstr
	call endl
	call exit0


result:
   call printint
   call endl
   call exit0    


section .data
	fir_num: db "Enter the first number : ",0
	sec_num: db "Enter the second umber : ",0
	operator: db "Enter the Operator(+,-,*,/) : ",0
	error: db "Wrong operator : ",0

section .bss
	fir_inp: resb 8 
	sec_inp: resb 8
	op_inp: resb 2