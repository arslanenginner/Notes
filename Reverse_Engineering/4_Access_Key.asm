
global _start

section .text

_start:

    jmp main

main:

	mov rax,0
	mov rdi,0
	mov rsi,user_key
	mov rdx,64
	syscall

cmpr_key:
    ;cmp rax,20       ; check original key length = user_input length
    ;jne access_denied      ;jump if not equal
 
; comp only work with integer so for string use compare-string-byte(comp two register only rdi,rsi) so correct key will be in rsi register and after enter it automaticaly

	mov rsi,org_key
	mov rdi,user_key 
	mov rcx,20    ; repe check value in rcx
	repe cmpsb                ; repeat check every byte otherwise check only 1 byte
	je access_granted    ;jump if equal
	jne access_denied    ;jump if not equal


access_granted:

	mov rax,1
	mov rdi,1
	mov rsi,acs_msg
	mov rdx,acs_msg_lng
	syscall
    jmp exiting     ;jump to exit


access_denied:

	mov rax,1
	mov rdi,1
	mov rsi,den_msg
	mov rdx,den_msg_lng
	syscall


exiting:

	mov rax,60
	mov rdi,0
	syscall


section .bss

	user_key: resb 64  ;get input from user


section .data


  ;access granted
	acs_msg: db "Access Granted!",10
	acs_msg_lng: equ $ - acs_msg

  ;access denied
	den_msg: db "Access Denied!",10
	den_msg_lng: equ $ - den_msg

  ;access key
    org_key: db "7382-1473-9582-1839"
   ; org_key_lng: equ $ - org_key