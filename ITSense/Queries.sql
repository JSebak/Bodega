

USE [master]
GO

/****** Object:  Database [Bodega]    Script Date: 8/02/2022 12:22:07 p. m. ******/
CREATE DATABASE [Bodega]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Bodega', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Bodega.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Bodega_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Bodega_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Bodega].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [Bodega] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [Bodega] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [Bodega] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [Bodega] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [Bodega] SET ARITHABORT OFF 
GO

ALTER DATABASE [Bodega] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [Bodega] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [Bodega] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [Bodega] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [Bodega] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [Bodega] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [Bodega] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [Bodega] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [Bodega] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [Bodega] SET  DISABLE_BROKER 
GO

ALTER DATABASE [Bodega] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [Bodega] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [Bodega] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [Bodega] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [Bodega] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [Bodega] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [Bodega] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [Bodega] SET RECOVERY FULL 
GO

ALTER DATABASE [Bodega] SET  MULTI_USER 
GO

ALTER DATABASE [Bodega] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [Bodega] SET DB_CHAINING OFF 
GO

ALTER DATABASE [Bodega] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [Bodega] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [Bodega] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [Bodega] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [Bodega] SET QUERY_STORE = OFF
GO

ALTER DATABASE [Bodega] SET  READ_WRITE 
GO

USE [Bodega]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 8/02/2022 12:22:21 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[Id] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Status] [bit] NOT NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Products] ADD  CONSTRAINT [DF_Product_Id]  DEFAULT (newid()) FOR [Id]
GO


INSERT INTO [dbo].[Products]
           ([Name]
           ,[Status])
     VALUES
           ('Lavadora A21',0),
		   ('Nevera X2470', 0),
		   ('Horno B', 1),
		   ('Secadora S32',0),
		   ('Licuadora H2',1)
GO

