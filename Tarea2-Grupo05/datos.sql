PGDMP                         {            test    15.2    15.2 ?    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    18466    test    DATABASE     w   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE test;
                postgres    false            �            1259    18469    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    18481    defensas    TABLE     f   CREATE TABLE public.defensas (
    id integer NOT NULL,
    defensa character varying(45) NOT NULL
);
    DROP TABLE public.defensas;
       public         heap    postgres    false            �            1259    18480    defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.defensas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.defensas_id_seq;
       public          postgres    false    216            T           0    0    defensas_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.defensas_id_seq OWNED BY public.defensas.id;
          public          postgres    false    215            �            1259    18487    diplomacias    TABLE     �   CREATE TABLE public.diplomacias (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
    DROP TABLE public.diplomacias;
       public         heap    postgres    false            �            1259    18493    karts    TABLE     �   CREATE TABLE public.karts (
    id integer NOT NULL,
    modelo character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public.karts;
       public         heap    postgres    false            �            1259    18492    karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.karts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.karts_id_seq;
       public          postgres    false    219            U           0    0    karts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.karts_id_seq OWNED BY public.karts.id;
          public          postgres    false    218            �            1259    18499    personaje_habita_reino    TABLE     �   CREATE TABLE public.personaje_habita_reino (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(6) without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 *   DROP TABLE public.personaje_habita_reino;
       public         heap    postgres    false            �            1259    18504    personaje_tiene_trabajo    TABLE     �   CREATE TABLE public.personaje_tiene_trabajo (
    id_personaje integer NOT NULL,
    id_trabajo integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date
);
 +   DROP TABLE public.personaje_tiene_trabajo;
       public         heap    postgres    false            �            1259    18510 
   personajes    TABLE     �   CREATE TABLE public.personajes (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto character varying(30)
);
    DROP TABLE public.personajes;
       public         heap    postgres    false            �            1259    18509    personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.personajes_id_seq;
       public          postgres    false    223            V           0    0    personajes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.personajes_id_seq OWNED BY public.personajes.id;
          public          postgres    false    222            �            1259    18516    reino_tiene_defensa    TABLE     �   CREATE TABLE public.reino_tiene_defensa (
    id_reino integer NOT NULL,
    id_defensa integer NOT NULL,
    fecha_registro timestamp(6) without time zone NOT NULL
);
 '   DROP TABLE public.reino_tiene_defensa;
       public         heap    postgres    false            �            1259    18522    reinos    TABLE     �   CREATE TABLE public.reinos (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ubicacion character varying(45) NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public.reinos;
       public         heap    postgres    false            �            1259    18521    reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.reinos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.reinos_id_seq;
       public          postgres    false    226            W           0    0    reinos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.reinos_id_seq OWNED BY public.reinos.id;
          public          postgres    false    225            �            1259    18529    trabajos    TABLE     ~   CREATE TABLE public.trabajos (
    id integer NOT NULL,
    descripcion character varying(45),
    sueldo integer NOT NULL
);
    DROP TABLE public.trabajos;
       public         heap    postgres    false            �            1259    18528    trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.trabajos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.trabajos_id_seq;
       public          postgres    false    228            X           0    0    trabajos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.trabajos_id_seq OWNED BY public.trabajos.id;
          public          postgres    false    227            �           2604    18484    defensas id    DEFAULT     j   ALTER TABLE ONLY public.defensas ALTER COLUMN id SET DEFAULT nextval('public.defensas_id_seq'::regclass);
 :   ALTER TABLE public.defensas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    18496    karts id    DEFAULT     d   ALTER TABLE ONLY public.karts ALTER COLUMN id SET DEFAULT nextval('public.karts_id_seq'::regclass);
 7   ALTER TABLE public.karts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            �           2604    18513    personajes id    DEFAULT     n   ALTER TABLE ONLY public.personajes ALTER COLUMN id SET DEFAULT nextval('public.personajes_id_seq'::regclass);
 <   ALTER TABLE public.personajes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    18525 	   reinos id    DEFAULT     f   ALTER TABLE ONLY public.reinos ALTER COLUMN id SET DEFAULT nextval('public.reinos_id_seq'::regclass);
 8   ALTER TABLE public.reinos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    18532    trabajos id    DEFAULT     j   ALTER TABLE ONLY public.trabajos ALTER COLUMN id SET DEFAULT nextval('public.trabajos_id_seq'::regclass);
 :   ALTER TABLE public.trabajos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            ?          0    18469    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   `L       A          0    18481    defensas 
   TABLE DATA           /   COPY public.defensas (id, defensa) FROM stdin;
    public          postgres    false    216   �L       B          0    18487    diplomacias 
   TABLE DATA           H   COPY public.diplomacias (id_reino_1, id_reino_2, es_aliado) FROM stdin;
    public          postgres    false    217   �M       D          0    18493    karts 
   TABLE DATA           R   COPY public.karts (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    219   �M       E          0    18499    personaje_habita_reino 
   TABLE DATA           g   COPY public.personaje_habita_reino (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    220   8O       F          0    18504    personaje_tiene_trabajo 
   TABLE DATA           h   COPY public.personaje_tiene_trabajo (id_personaje, id_trabajo, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    221   mP       H          0    18510 
   personajes 
   TABLE DATA           R   COPY public.personajes (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    223   uQ       I          0    18516    reino_tiene_defensa 
   TABLE DATA           S   COPY public.reino_tiene_defensa (id_reino, id_defensa, fecha_registro) FROM stdin;
    public          postgres    false    224   \S       K          0    18522    reinos 
   TABLE DATA           C   COPY public.reinos (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    226   �S       M          0    18529    trabajos 
   TABLE DATA           ;   COPY public.trabajos (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    228   4T       Y           0    0    defensas_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.defensas_id_seq', 14, true);
          public          postgres    false    215            Z           0    0    karts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.karts_id_seq', 29, true);
          public          postgres    false    218            [           0    0    personajes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.personajes_id_seq', 28, true);
          public          postgres    false    222            \           0    0    reinos_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.reinos_id_seq', 4, true);
          public          postgres    false    225            ]           0    0    trabajos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.trabajos_id_seq', 13, true);
          public          postgres    false    227            �           2606    18477 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    18486    defensas defensas_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.defensas
    ADD CONSTRAINT defensas_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.defensas DROP CONSTRAINT defensas_pkey;
       public            postgres    false    216            �           2606    18491    diplomacias diplomacias_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_pkey PRIMARY KEY (id_reino_1, id_reino_2);
 F   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_pkey;
       public            postgres    false    217    217            �           2606    18498    karts karts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_pkey;
       public            postgres    false    219            �           2606    18503 2   personaje_habita_reino personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_pkey PRIMARY KEY (id_personaje, id_reino);
 \   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_pkey;
       public            postgres    false    220    220            �           2606    18508 4   personaje_tiene_trabajo personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_pkey PRIMARY KEY (id_trabajo, id_personaje);
 ^   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_pkey;
       public            postgres    false    221    221            �           2606    18515    personajes personajes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.personajes
    ADD CONSTRAINT personajes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.personajes DROP CONSTRAINT personajes_pkey;
       public            postgres    false    223            �           2606    18520 ,   reino_tiene_defensa reino_tiene_defensa_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_pkey PRIMARY KEY (id_reino, id_defensa);
 V   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_pkey;
       public            postgres    false    224    224            �           2606    18527    reinos reinos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.reinos
    ADD CONSTRAINT reinos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.reinos DROP CONSTRAINT reinos_pkey;
       public            postgres    false    226            �           2606    18534    trabajos trabajos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.trabajos
    ADD CONSTRAINT trabajos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.trabajos DROP CONSTRAINT trabajos_pkey;
       public            postgres    false    228            �           2606    18535 '   diplomacias diplomacias_id_reino_1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_1_fkey FOREIGN KEY (id_reino_1) REFERENCES public.reinos(id);
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_1_fkey;
       public          postgres    false    3237    217    226            �           2606    18540 '   diplomacias diplomacias_id_reino_2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.diplomacias
    ADD CONSTRAINT diplomacias_id_reino_2_fkey FOREIGN KEY (id_reino_2) REFERENCES public.reinos(id);
 Q   ALTER TABLE ONLY public.diplomacias DROP CONSTRAINT diplomacias_id_reino_2_fkey;
       public          postgres    false    217    226    3237            �           2606    18545    karts karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.karts
    ADD CONSTRAINT karts_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id);
 G   ALTER TABLE ONLY public.karts DROP CONSTRAINT karts_id_personaje_fkey;
       public          postgres    false    219    223    3233            �           2606    18550 ?   personaje_habita_reino personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id);
 i   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_personaje_fkey;
       public          postgres    false    223    3233    220            �           2606    18555 ;   personaje_habita_reino personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public.reinos(id);
 e   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_reino_fkey;
       public          postgres    false    226    3237    220            �           2606    18560 A   personaje_tiene_trabajo personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public.personajes(id);
 k   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey;
       public          postgres    false    221    3233    223            �           2606    18565 ?   personaje_tiene_trabajo personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey FOREIGN KEY (id_trabajo) REFERENCES public.trabajos(id);
 i   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey;
       public          postgres    false    221    3239    228            �           2606    18570 7   reino_tiene_defensa reino_tiene_defensa_id_defensa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_id_defensa_fkey FOREIGN KEY (id_defensa) REFERENCES public.defensas(id);
 a   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_id_defensa_fkey;
       public          postgres    false    3223    216    224            �           2606    18575 5   reino_tiene_defensa reino_tiene_defensa_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reino_tiene_defensa
    ADD CONSTRAINT reino_tiene_defensa_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public.reinos(id);
 _   ALTER TABLE ONLY public.reino_tiene_defensa DROP CONSTRAINT reino_tiene_defensa_id_reino_fkey;
       public          postgres    false    224    3237    226            ?   �   x�m���0�q4����k;EPA�h�+ ѿ���63�h�2�ш�ޣ'��4�Jg��6W�+EZ����PABi�jkT��fS���RI�I'��`��~���m��
�П����خ���_|����/o�j�)�{��h/"      A   �   x��;
�@E�wW1P|I��#A���Hp��ɲ\�sLs�-Nq�rն$tV�Ŕ��d}<. #�xo�x��
/� �h�|?�j�z3/�t��u�ؠ��E^�0bOV�����y��uf�֓��	�D�Z�pJe��8�[y�gܗ ~��1�      B   '   x�3�4�,�2�4���F@��N�M���@v� �kK      D   J  x�u��N�0Dϻ_�/@ٍ�8G�)��B���Մ��	��Mu����͎g���ݰ��I�����vzx� r dXM��Y����W��
/
̠~7��J���=T���!Gq)�X�(�f�&Aa��]R���{��{�A*`�"Nr�
9Td��.Q
�����{3&���a�%P���(BJ"x�v�8t�.Y�~�'�«��W���U�.}ϵ���;'�%�L�=�#%�֓��d�NC�gY�#J���S��"���f�,���mhP!_510sd<�� C�b�8�a�_�9p����������o
���K ���/w��8ր      E   %  x�M�ɍ�0�rJ@^�˼7��ۤlc �
�.��H��XI��]��]�nB���p��{i� 3ɪdn�6@�!@�u'酃�F_Sg'-X�G�!��6����d}[#m;����ӳ�`W(�p� L'�(�Ti�E�ӄ�,��*X���M1é
=8��&XXX��]������Ȳ���\B$57B�=ÿ�}��<(5d��0ZﻤI��a�W�\ar�.���!�m�)ON+~<�w�+�K�+�B�*CC�����c�}#Kt��!�;��??�u�/xsI      F   �   x�uR˕�0;C/�C���V0�ױ`�io	��`d�)P���8e�!:��At���;ӐDW��ό��H�6�� hA�����I��z5���COv�S���5^���a�B��G<�\0�&$�}�q�-�+�|ul-1� F+���k�<����f�¾U����W%�c��o�g��2`<��N �f����J���oJ?����yNU���Q�=QX� ykﱣ6�j�t���u�D`�?�燙� 
�g      H   �  x�uS�n�0<��B?��K=yll���A�-
�BX��Dʪ���7�Ǻ+�}8�I�f4;3�Bؘ�<hPR�BVBհڙ~�~��C���o�1���ɵ��U!P	U��}���7�x�ᰃ�@��,�����g:�#fM�Z(ۚt���3�0cIIz"C�W�Cp�֎&}�f��R� �d�\��h��X�@�d��H�>\A� }�)|���ڎ�`��$��6G�*f)n����[��&}�X�PC<X�TD��}��:���r|�Cs���P�R���B���bO��؁���vMa����Pʛ�6�u��O���}wv!�v*9��.�%��^�$e G�D��Z����7�d�c����pvG��%ױ2TM�wSoƄ6�ŏ;������C��qݤ�0>�g?'�埢Ft�i�RE����"�R��Ɇ�����j���|���m�@�����2iD����ɥ����*I�_[��       I   L   x�%��� �wR��. p�����10{���q�iȊO��	<廜�����v��Ԩ��r����      K   l   x�3�J���Wp�H�-�<�1?��1G!/��$����Ę���;?� $W\Z�ibll�e��Z��������YR	�K-j3�45�2�j��/��I��L��b���� ��#_      M   "  x�U�AN�0E��S�(v�4���PQDWHl�dh,���v�6,YV!�i�����[����<�g�TUk��~��L��1��c�����4�:(L!rX#�����A�#F|g�� ƘZX��v�v�l�u�4v���D	�9�m�GЋ�hpo�� W̻�d]-*xp[r�.�N'v ��\�	��|Z��4�z��΄�`��'���ɖ{�f�搶r��2T�J��cz��^���<E>#��ȃR�VC�.E�x?�#�s��,���W	�0� jar�z#���}9     